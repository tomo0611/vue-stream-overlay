# Stream Overlay for OBS

An overlay using the browser source function of Open Broadcaster Software.

This is a fork from [MATTENN/vue-stream-overlay](https://github.com/MATTENN/vue-stream-overlay) .

![example](.github/movie.gif)

## Warning

This tool does not take any security measures. Therefore, **Please do not expose to the Internet.**

## Required environment

- **Latest** Web browser 
  - using Webkit / Blink / Gecko as rendering engine
  - Not been confirmed by Internet Explorer or Microsoft Edge.
- Open Broadcaster Software

## Getting Started

1. Clone this repository and go to the cloned directory.
2. Set the HTTP server document root to this directory.
3. Add browser source in OBS. Name the file `http://localhost/sample.html`
4. Open the `http://localhost/` from the browser.