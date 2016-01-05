#!/bin/bash
dpkg-deb -bZgzip projects/customreach debs
dpkg-deb -bZgzip projects/homebuttonlock debs
dpkg-deb -bZgzip projects/netflixnchill debs
dpkg-deb -bZgzip projects/neversummer debs
dpkg-deb -bZgzip projects/nosbrotate debs
dpkg-deb -bZgzip projects/screenlock debs
dpkg-deb -bZgzip projects/volumelock debs
# dpkg-deb -bZgzip projects/<project name> <output folder>