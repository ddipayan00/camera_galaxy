sudo truncate -s 0 ./workdir/logs/combined.log
sudo truncate -s 0 ./workdir/logs/debug.log
sudo truncate -s 0 ./workdir/logs/errors.log
sudo truncate -s 0 ./workdir/logs/info.log
sudo truncate -s 0 ./workdir/logs/warning.log
echo Success!