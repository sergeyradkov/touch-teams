(function(){
    
    angular.module('teams')
        .component('leagueComponent', {
            templateUrl: 'app/components/league/league.html',
            controller: LeagueController
        })
        
        function LeagueController($state, Models){
            var $ctrl = this;
            
     //       $ctrl.sport = $state.params.sport;
    //        $ctrl.league = $state.params.league;
            
            
            Models.League.findAll({name: $state.params.league},{bypassCache: true}).then(function(league){
              debugger
              $ctrl.league = league[0];
            })
            
            
            $ctrl.addTeam = function(team){
                team.leagueId = $ctrl.league.id;
                Models.Team.create(team)
                $ctrl.newTeam = {}
            }
        }
    
}())