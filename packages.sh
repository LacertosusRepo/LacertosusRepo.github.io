#!/bin/bash
dpkg-deb -bZgzip projects/screenlock debs
# dpkg-deb -bZgzip projects/<project name> <output folder>