/* eslint max-len: ["error", 1000] */
module.exports = function (shipit) {
  shipit.initConfig({
    production: {
      servers: 'lesyek@s4.mydevil.net'
    }
  })

  shipit.task('deploy', function () {
    return shipit.local('curl --ftp-create-dirs -T dist.tar.gz -u f1101_itenteges:GR6DmL7X6rws ftp://s4.mydevil.net/').then(function () {
      return shipit.remote('cd /home/lesyek/domains/itenteges.pl/public_nodejs/public && rm -rf * && tar -zxvf ../../dist.tar.gz')
    })
  })
}
