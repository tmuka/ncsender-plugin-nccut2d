# ncCut2D

Turns a 2D drawing into CNC router G-code, inside ncSender.

- **Opens** DXF, SVG, PDF and Illustrator (.ai) files drawn to size.
- **Cuts** outside (with tabs), inside, on the line, or as a pocket, chosen per colour layer or per shape.
- **Tools and feeds** come from your Tool Library, with speeds and feeds for the material.
- **Chamfers** the top edges with a V-bit, if you want.
- **Size fields take any unit:** `1/4"`, `6mm`, `12mm+1/4"`.
- **Previews** the cut on a model of the stock and checks it for collisions.
- **Loads** the program into ncSender, and can also save it to File Manager.
- **Remembers** your recent drawings and their settings.

## How it works

1. **Drawing**: open the file and set the stock's thickness. Under **What to cut**, choose a cut for each colour layer or shape (click shapes to pick them):
   - **Outside**: the part, with tabs.
   - **Inside**: a hole or window.
   - **On the line**: a groove; open lines too.
   - **Pocket**: cleared to a depth.
   - **Off**.
2. **Stock & Zero**:
   - the material;
   - the stock size, or **Size the stock to the drawing**;
   - tabs: how many, how thick and how long;
   - **Where is zero?** Tap one of nine points, then choose Z0 on top of the stock or on the bed.
3. **Operations**:
   - the finish;
   - the tools for this job;
   - each operation, which you can switch off or give a different tool;
   - **Add Chamfer to top surfaces**.
4. **Preview & Load**: the cut plays on the stock, with a collision check. **Load into ncSender**. While the remembered **Save to File Manager** switch is on, Load also saves the program to File Manager › ncCut2D.

Size fields show your machine's units. You can type another unit, a fraction or a sum, and it's converted when you leave the field: `1/4"`, `6mm`, `1-1/2 in`, `1,5mm`, `12mm+1/4"`. Up and Down step the value (Shift ×10, Alt ×0.1). This uses [ncsender-unit-input](https://github.com/tmuka/ncsender-unit-input).

The plan and what's next: [docs/PLAN.md](docs/PLAN.md).

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
