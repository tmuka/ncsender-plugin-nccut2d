## What's Changed

### 🐛 Fixes
- **Holes barely wider than the bit come down quickly.** A 1/2" bit in a 13.4 mm hole used to ramp down at the material's angle (5° in MDF), lap after lap on a circle so small the machine can't get up to speed on it. Now, on any loop that small, Z comes down at the plunge rate, as fast as your machine's acceleration (`$120`/`$121`) allows on that circle. When that's steeper than 45°, it goes straight down a step at a time and cuts a lap at each depth. The first ring of a small round pocket works the same way. Bits named as compression or down-cut keep the slow ramp, because their chips pack down into the hole. It works the same way as in QuickCut.

### ✨ New Features
- **The speed range of the spindle in use.** grblHAL can have several spindles, and a VFD can use the range it reads from the drive instead of `$30`/`$31`. While the machine is idle, ncCut2D asks which spindle is in use and plans at its range. Without an answer it reads `$30`/`$31`, or `$730`/`$731` when the default spindle is PWM2.
- **A warning for a low Spindle max.** A Spindle max under 5000 RPM (a laser's 1000 left in `$30`, say) used to slow every bit without a word. Now there's a warning that says where the number came from.
- **Retracts follow Safe Z.** On ncSender 2.0.228 or Pro 2.0.326 and later, programs retract with `$SAFEZ`, so they follow the Safe Z setting at run time. Older versions keep the `G53 G0` retract.
