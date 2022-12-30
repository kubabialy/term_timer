# Term Timer

Term Timer is a Node.js CLI application that adds a timer to your terminal.

**Note**: this code was not very well thought out and chances are a lot of things can be done better.
With that said - if you see any potential improvements feel free to open an issue or pull request.

## Installation

TODO: Add proper explanation.

```bash
git clone github@kubabialy/term_timer.git
./timer 15 m # This will make timer go for 15 minutes.
```

## Usage

```bash
# First argument passed to timer is an integer representing time unit (so - seconds, minutes, hours)
# Second argument is optional, keep in mind that not providing this argument will make timer use seconds as a unit of time.

# Following will set a timer for 5 minutes:
./timer 5 m

# While without providing that argument will cause it to run for 5 seconds only.
./timer 5
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
