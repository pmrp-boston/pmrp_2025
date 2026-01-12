# Getting started

This runs locally with Ruby 3.4.1.

## Set Up Ruby

Make Ruby version 3.4.1 available on your system. On macOS, I (Kim) successfully used ["rbenv"](https://github.com/rbenv/rbenv) to get the correct version of Ruby.

First install rbenv:
[rbenv installation instructions](https://github.com/rbenv/rbenv?tab=readme-ov-file#installation)

Other operating systems have other instructions. On macOS, open a Terminal and run this to install rbenv:

```
brew install rbenv
```

Set up your shell to run with rbenv:

```
rbenv init
```

Running "rbenv init" will add something like this to ~/.profile. It's ok if this doesn't make sense to you.

```
# Added by `rbenv init` on Fri Oct 17 17:45:56 EDT 2025
eval "$(rbenv init - --no-rehash bash)"
```

Next, use rbenv install Ruby 3.4.1. This takes a while.

```
rbenv install 3.4.1
```

Go to this repo's root directory. From there, tell rbenv to use ruby 3.4.1 here:

```
rbenv local 3.4.1
```

This should create a .ruby-version file with contents "3.4.1" in the directory where you ran the command.

**You may need to restart your shell.** You should now be able to check which ruby, gem, and bundler you are using and their versions:

| Command             | Output                                                                 |
| ------------------- | ---------------------------------------------------------------------- |
| `which ruby`        | `/Users/Kim/.rbenv/shims/ruby`                                         |
| `ruby --version`    | `ruby 3.4.1 (2024-12-25 revision 48d4efcb85) +PRISM [x86_64-darwin22]` |
| `which gem`         | `/Users/Kim/.rbenv/shims/gem`                                          |
| `gem --version`     | `3.6.2`                                                                |
| `which bundler`     | `/Users/Kim/.rbenv/shims/bundler`                                      |
| `bundler --version` | `4.0.3`                                                                |

# Set Up Jekyll

From the root directory, run `bundle install`.

You should now be able to check your Jekyll version. (The command "jekyll version" does not work for me.)

From the root directory:

```
$ bundle exec jekyll --version
jekyll 3.10.0
```

## Run a local development server

To start the server, run `bundle exec jekyll serve`.

The site should become available at localhost:4000.

To have the site update live as you make changes, run `bundle exec jekyll serve --livereload`.

For more instructions and troubleshooting, see the [Jekyll Documentation](https://jekyllrb.com/docs/installation/).

## Troubleshooting Ruby

If you're having trouble with Ruby, make sure these environment variables are NOT set:

- RUBIES
- GEM_HOME
- GEM_PATH

I (Kim) needed to set RBENV_ROOT to change rbenv's root directory because its default path on my computer had a space character in the path. Ruby did not like spaces in the path.

To do that, I added this line to ~/.profile:

```
export RBENV_ROOT=/Users/Kim/.rbenv
```

## Sample tasks.json (for Visual Studio Code)

If you use Visual Studio Code, you may find these useful to add to tasks.json for this project:

```
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Ruby: Version",
            "type": "shell",
            "command": "ruby",
            "args": ["-v"],
            "problemMatcher": []
        },
        {
            "label": "Jekyll: Build",
            "type": "shell",
            "command": "bundle",
            "args": ["exec", "jekyll", "build"],
            "problemMatcher": [],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        },
        {
            "label": "Jekyll: Serve",
            "type": "shell",
            "command": "bundle",
            "args": ["exec", "jekyll", "serve"],
            "problemMatcher": [],
            "isBackground": true,
            "group": {
                "kind": "build"
            }
        },
        {
            "label": "Jekyll: Serve (Livereload)",
            "type": "shell",
            "command": "bundle",
            "args": ["exec", "jekyll", "serve", "--livereload"],
            "problemMatcher": [],
            "isBackground": true,
            "group": {
                "kind": "build"
            }
        },
        {
            "label": "Jekyll: Clean",
            "type": "shell",
            "command": "bundle",
            "args": ["exec", "jekyll", "clean"],
            "problemMatcher": []
        }
    ]
}
```
