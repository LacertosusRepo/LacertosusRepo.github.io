# LacertosusRepo.github.io
![GitHub last commit](https://img.shields.io/github/last-commit/LacertosusRepo/LacertosusRepo.github.io.svg?style=for-the-badge) [![GitHub forks](https://img.shields.io/github/license/LacertosusRepo/LacertosusRepo.github.io.svg?style=for-the-badge)](https://github.com/LacertosusRepo/LacertosusRepo.github.io/license)

## Meaning of Lacertosus Deus? **Powerful Deity**
What exactly does that mean to me? Dunno, sounded cool! Unfortunately, it sounds *a little* narcissistic.

### Useful Links:

| Useful Links: |
|---------------|
| [iPhoneDevWiki](http://iphonedevwiki.net/index.php/Main_Page) |
| [Objective-C in 24 Days](https://github.com/uroboro/Learn-Objective-C-in-24-Days-Clone) |
| [r/JailbreakDevelopers](https://www.reddit.com/r/jailbreakdevelopers/) |
| [iOS Headers](http://developer.limneos.net) |

### How did you create your <a href="http://lacertosusrepo.github.io">repository</a>?
Well, there are a few sources:

1. The creation of the repo was made using [Tyler Crawford's Tutorial](https://www.youtube.com/watch?v=XqkTnxyiiOc).
2. Thanks to Elijah and Andrew, I could have some appealing package depictions.
3. Some modifications to the style.css file was done by me (and a bit of googling) to get it where I wanted.
4. Finally, the animations are by [Daniel Eden](https://github.com/daneden) and his amazing work [animate.css](https://daneden.github.io/animate.css/)

### Notes to Myself
Permission errors? Try:
```bash
sudo chmod -R +x $THEOS
```

Having issues with *fakeroot* throwing errors when making a package? Use the following command:

```bash
//Thanks to JohnCoates
sudo sed -i 's/\$(FAKEROOT) -r/fakeroot-tcp/g'  /opt/theos/makefiles/package/deb.mk
```

Getting this error when trying to update theos? *The Perl module IO::Compress::Lzma needs to be installed.*

```bash
//Thanks to JohnCoates, again
sudo apt-get install libio-compress-perl
```

Getting this error when compiling? *arm64-apple-darwin14-clang++: line 1: arm64-apple-darwin14-clang-3.9: command not found*

```bash
//Thanks to JohnCoates, again, again
cd /opt/theos/toolchain/
sudo wget https://developer.angelxwind.net/Linux/ios-toolchain_clang%2bllvm%2bld64_latest_linux_x86_64.zip -O LinuxToolchain.zip
sudo unzip LinuxToolchain.zip && sudo rm -f LinuxToolchain.zip
```

*[Source ~ John Coates's Script](https://gist.github.com/JohnCoates/ea7b8002b77ab7c1c758384e55538603)*
