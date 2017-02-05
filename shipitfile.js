module.exports = function (shipit) {
  shipit.initConfig({
    production: {
      servers: 'lesyek@s4.mydevil.net'
    }
  })

  shipit.task('deploy', function () {
    return shipit.local('scp dist.tar.gz lesyek@s4.mydevil.net:/home/lesyek/domains/itenteges.pl/.').then(function () {
      return shipit.remote('cd /home/lesyek/domains/itenteges.pl/public_nodejs/public && rm -rf * && tar -zxvf ../../dist.tar.gz')
    })
  })
}
