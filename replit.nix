{ pkgs }: {
    deps = [

        pkgs.nodejs-16_x
        pkgs.libwebp
        pkgs.python
	      pkgs.nodePackages.typescript
        pkgs.libuuid
        pkgs.neofetch
        pkgs.speedtest-cli
        pkgs.yarn
        pkgs.ffmpeg
        pkgs.imagemagick  
        pkgs.wget
        pkgs.git
        pkgs.nodePackages.pm2
    ];
  env ={
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
  };
}
