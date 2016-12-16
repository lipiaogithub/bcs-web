/**
 * 
 */
BcsApp.controller('QuotationController', ['$rootScope', '$scope', '$http', function($rootScope, $scope,$http) {
  $scope.Transactions = [
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'BBSH',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'378446', Currency:"CNY" , Side:'存入', Amount:"1,000,000.00", Rate:"2.31" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'64.44', TotalRepayment:"1,000,064.44", SendTime:'2016/11/02 10:09:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'ICBC',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.34" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.28', TotalRepayment:"1,000,065.28", SendTime:'2016/11/08 12:45:09' },
   	      	          {id:1, TransactionType:'同业存款', SenderInstitutionCode:'ICBC',CounterPartyInstitutionCode:'BBSH',  CounterPartyInstitutionSettlementAccount:'343432', Currency:"CNY" , Side:'存出', Amount:"1,000,000.00", Rate:"2.24" , DayCountConvention:'360', Tenor:"1Y", ValueDate:"2016/11/23", DueDate:"2016/11/24" , Interest:'65.23', TotalRepayment:"1,000,065.28", SendTime:'2016/11/02 10:09:09' }
   	      	          ];
   
}]);