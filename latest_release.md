## ncCut2D v0.1.0: first release

Turns a 2D drawing into CNC router G-code, in ncSender.

### ✨ Features
- **Drawings:** DXF, SVG, PDF and Illustrator (.ai) files, drawn to size.
- **Choose cuts** per colour layer or per shape:
  - **Outside**: the part, with tabs.
  - **Inside**: a hole or window.
  - **On the line**: a groove; open lines too.
  - **Pocket**: cleared to a depth.
  - **Off**.
- **Stock & Zero:** material, stock size, nine zero points, Z on top of the stock or on the bed, and tabs.
- **Tools and feeds:** end mills come from your Tool Library, with speeds and feeds for the material and finish.
- **Add Chamfer to top surfaces** (from ncCAM): a V-bit runs along the top edges the cuts leave. The scrap and the tabs are left clear.
- **Size fields take any unit:** `1/4"`, `6mm`, `1-1/2 in`, `1,5mm` or `12mm+1/4"`. They're shown in your machine's units, and Up and Down step the value.
- **Preview & Load:**
  - The cut plays on a model of the stock and is checked for collisions.
  - Load into ncSender.
  - With the remembered **Save to File Manager** switch on, the program is also saved to File Manager › ncCut2D.

Built from siganberg's [ncCAM](https://github.com/siganberg/ncsender-plugin-nccam) and [ncLaser](https://github.com/siganberg/ncsender-plugin-nclaser) (GPL-3.0).
