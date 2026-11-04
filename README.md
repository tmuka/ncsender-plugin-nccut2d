# ncCut2D

An ncSender plugin that turns a 2D drawing into CNC router G-code. **Work in progress:**
the core (reading drawings, planning, toolpaths, simulation, G-code) works and is tested;
the dialog is being built. See [docs/PLAN.md](docs/PLAN.md).

1. **Drawing**: open a DXF, SVG, PDF or Illustrator (.ai) file drawn to size.
2. **Choose cuts**: per colour layer, or per shape, pick **Outside** (the part, with tabs),
   **Inside** (a hole or window), **On the line** (a groove, open lines too), **Pocket**
   (clear inside, down to a depth) or **Off**; the stock's thickness and each cut's depth.
3. **Stock & tools**: material, stock size, zero, tabs; end mills from the Tool Library.
4. **Preview & Load**: the cut plays on a model of the stock; load into ncSender.

## Where it comes from

Both parents are by siganberg (ncSender), GPL-3.0:
- [ncCAM](https://github.com/siganberg/ncsender-plugin-nccam) v0.1.5: toolpaths (`src/core/paths.js`),
  simulation, G-code, tools and feeds, Clipper offsets, the preview and the dialog's shell.
- [ncLaser](https://github.com/siganberg/ncsender-plugin-nclaser) v0.1.0: the DXF, SVG and PDF
  readers and 2D geometry (`src/core/dxf.js`, `geom.js`, `svgpath.js`, `pdf.js`, `layers.js`,
  `src/ui/svg.js`, `src/ui/pdfjs.js`).

ncCut2D's own: `src/core/plan2d.js` (choices to operations) and the inside and on-the-line
toolpaths in `paths.js`.

## Development

```
npm install
npm test        # readers, planner, toolpaths, simulation, G-code
```

DXF reading: [dxf-parser](https://github.com/gdsestimating/dxf-parser) (MIT).
PDF reading: [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0).
Offsets: [Clipper](https://sourceforge.net/projects/jsclipper/) (Boost).

License: GPL-3.0 (see LICENSE-GPL-3.0), as its parents.
