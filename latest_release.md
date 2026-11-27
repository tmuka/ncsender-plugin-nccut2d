## What's Changed

### 🐛 Fixes
- **No spindle start for a pen or a drag knife.** ncSender's Tool Library has Pen / Marker and Drag Knife tool types, and ncSender refuses to start the spindle while one is loaded, which would stop the job. ncCut2D's programs now leave out the spindle start (`M3`) and the spindle wait for these tools, and the run time leaves out the wait too. Programs for every other tool are unchanged.
- **A pen or drag knife goes no deeper than its flute length.** If such a tool has a flute length (an imported tool, or one retyped from an end mill, can), its tip goes no lower than that below the stock's top. This only ever raises Z.

ncCut2D's dialog doesn't offer pens or drag knives for its cuts yet, so these are safety nets for a job saved with one.
