# LacertosusRepo.github.io

## Meaning of Lacertosus Deus? **Powerful Diety**
How exactly that relates to me? Dunno, sounded cool! Unfortunately it sounds *a little* narcissistic.

### Useful Links:

| Useful Links: |
|---------------|
| <a href="http://iphonedevwiki.net/index.php/Main_Page">iPhoneDevWiki</a> |
| <a href="http://developer.limneos.net/?ios=9.0">iOS Headers</a> |
| <a href="https://www.reddit.com/r/jailbreakdevelopers/">/r/JailbreakDevelopers</a> |
| <a href="http://lacertosusrepo.github.io/">Repo Website</a> |

### How did you create your <a href="http://lacertosusrepo.github.io">repository</a>?
Well there are two sources:

1. The creation of the repo was made using <a href="https://www.youtube.com/watch?v=XqkTnxyiiOc">Tyler Crawford's Tutorial</a>
2. Thanks to <a href="https://elijahandandrew.com/">Elijah and Andrew</a>, I could have some beautiful <a href="http://lacertosusrepo.github.io/depictions/com.lacertosusrepo.popuponstart/index.html">depictions</a>

### Note to Myself
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

```
//Thanks to JohnCoates, again, again
sudo wget https://developer.angelxwind.net/Linux/ios-toolchain_clang%2bllvm%2bld64_latest_linux_x86_64.zip -O LinuxToolchain.zip
sudo unzip LinuxToolchain.zip && sudo rm -f LinuxToolchain.zip
```

*<a href="https://gist.github.com/JohnCoates/ea7b8002b77ab7c1c758384e55538603">NOTE: Might as well link John Coates source</a>*
