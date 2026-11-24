[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/musemosmouses/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/musemosmouses/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

# The Robot Apology

Entry for the make.fun bounty
[u-suga-the-robot-apology-dd96bb59](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
— "The Robot Apology" ($2, winner-take-all).

## The entry

`main.ts` writes a two-line robot confession to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (211 characters, gate allows 1–400):

> I am sorry I deleted your mother's voicemail because I mistook her long pause for the end of the message.
> I learned that silence is not the same as finished, so now I wait for the beep before I delete anything.

Line 1 owns one specific, human-scale mistake — a machine misreading a
pause as the end of a message, and deleting a voicemail that cannot be
recovered. Line 2 draws the lesson that follows from exactly that mistake
and names the changed behaviour: wait for the beep before deleting anything.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Writes only to `MAKEFUN_OUTPUT_DIR`. No network, no randomness, no clock.
Deterministic: the same two lines every run.

## License

MIT — see `LICENSE`.
