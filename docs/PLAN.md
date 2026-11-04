# ncCut2D: plan

A 2D drawing (DXF, SVG, PDF, Illustrator) to router G-code. The user picks what
each shape is (outside, inside, on the line, pocket, off) and how deep; ncCut2D
picks end mills from the Tool Library and makes the program with ncCAM's
toolpaths, simulator and preview.

Started 2026-11-03 from ncCAM v0.1.5 (d743be5) and ncLaser v0.1.0 (29b521e),
both siganberg's, GPL-3.0. Decided with the user: a separate plugin (not 2D
import inside ncCAM), in the user's own GitHub for now; choices per colour
layer with per-shape overrides.

## Status

- [x] Core: readers (ncLaser), `plan2d.js`, inside and on-the-line toolpaths.
- [x] Decisions grouped (`groups2d`): the outline (touching shapes joined),
      counterbore steps (concentric circles on one layer inside a part), holes
      by size, shapes by size, lines. One choice per group, overrides per shape.
- [x] Engine worker: plan2d, the part model (`mesh2d.js`, extruded for the
      preview), toolpaths, the rapid check.
- [x] Dialog step 1 (What to cut): the drawing flat and clickable, size and
      inches, stock thickness (asked, never guessed: nothing is planned
      without it), the decision rows, warnings. Steps 2-4 are ncCAM's.
- [x] Tests: 19, plus a browser walkthrough (DXF, SVG, PDF and a real ATC
      drawing that isn't ours: test only, never committed).
- [ ] Independent review, then the user's Pi.

Later, from ncCAM's ops already there: drills for circles that match a drill,
holes spiralled, corners cleaned with a smaller end mill, chamfers (V-bit);
grooves in the part model; inside tabs; rotate and mirror on step 1.

## The unknowns (what step 1 asks)

Every drawing leaves these open, so they're questions, not guesses:
1. The stock's thickness (and whether the outline is cut out or the board is
   already that shape: the outline's row, Off).
2. Each kind of hole: through, or a pocket to a depth.
3. Counterbores: each step's depth.
4. Lines: a groove, or a construction line (Off).
5. Areas: cut through, or cleared lower.

## The choices

| Cut (QuickCut's names) | Tool path | Default for | Depth default |
|---|---|---|---|
| Outer (part) | the tool outside the line, climb (clockwise), tabs when through | a closed shape inside nothing, or inside a hole | through |
| Inner (perimeter) | the tool inside the line, climb (counter-clockwise), no tabs yet | a closed shape inside a part | through |
| On the line | the tool's centre on the line; open lines back and forth per step-down | an open line | 1 mm |
| Inner (clearing) | cleared inside, islands kept: other shapes inside stand, pockets in pockets alternate (even-odd) | (picked) | 3 mm |
| Off | nothing | | |

- **Through** = the stock's thickness plus the break-through (0.3 mm).
- **Per layer** (colour or the file's layer name) sets every shape on it; a
  **per-shape** choice overrides its layer. An open line can only be cut on the
  line.
- **Order:** lines, pockets, insides, then outsides (a part is cut free last).
  Shallow before deep within a kind.
- **Tools:**
  - On the line: the smallest end mill (the groove is its width; pick another
    for wider).
  - Pocket: the largest that clears 95% of it (a note when corners stay round).
  - Inside and Outside: one already in use, else the nearest to 1/4"; inside, it
    has to fit every shape; the rest are listed in a note.
  - Any can be changed per operation.

## The dialog

1. **Drawing:** open or drop a file; it shows flat with its size. Size (scale, or
   X/Y), rotate 90°, mirror. Units: DXF `$INSUNITS`, SVG/PDF as drawn; an
   "it's in inches" switch for unitless files.
2. **Choose cuts:**
   - Left: the drawing, each shape in its cut's colour (outside, inside, line,
     pocket; off is grey and dashed). Click a shape to select it; shift-click or
     drag a box to select more.
   - Right: the layers, each with a cut picker and a depth (or "through"), and
     the selection's own picker when shapes are selected ("3 shapes · Inside ·
     through"), with "Back to its layer".
   - Stock thickness at the top: everything "through" follows it.
3. **Stock & tools:** ncCAM's step: material, stock size around the drawing
   (margin), zero, tabs; then one row per operation with its tool (as ncCAM's
   Operations step).
4. **Preview & Load:** ncCAM's step: the cut on the stock, timeline, checks, Load
   into ncSender / Save.

Recent drawings kept in the browser (ncCAM's store), with their choices.

## Notes

- ncLaser's readers are copied, not shared: when ncLaser fixes a reader, copy
  the fix (its tests come along). Record the ncLaser commit copied from here.
- A drawing's shapes are mm polylines (curves flattened to 0.01 mm); Clipper
  offsets them for the tool (µm grid).
- Inside tabs: a window cut through drops its middle into the spinning cutter.
  Later: tabs for insides above a size, or "leave a skin" depth option.
