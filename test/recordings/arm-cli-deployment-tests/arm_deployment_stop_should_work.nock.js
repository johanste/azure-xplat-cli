// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1913?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup1913' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': '27b794be-c699-4306-ae04-3b37d9fd1673',
  'x-ms-correlation-request-id': '27b794be-c699-4306-ae04-3b37d9fd1673',
  'x-ms-routing-request-id': 'WESTUS:20160325T191511Z:27b794be-c699-4306-ae04-3b37d9fd1673',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:15:10 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1913?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913\",\"name\":\"xDeploymentTestGroup1913\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'db63c097-485c-4908-9dc6-1db82c186379',
  'x-ms-correlation-request-id': 'db63c097-485c-4908-9dc6-1db82c186379',
  'x-ms-routing-request-id': 'WESTUS:20160325T191512Z:db63c097-485c-4908-9dc6-1db82c186379',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:15:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1913/providers/Microsoft.Resources/deployments/Deploy11629/validate?api-version=2016-02-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Resources/deployments/Deploy11629\",\"name\":\"Deploy11629\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite15126\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost21298\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Standard\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-03-25T19:15:12.9365576Z\",\"duration\":\"PT0S\",\"correlationId\":\"2b179ba3-d007-4579-901b-15ca63b85ee6\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21298\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite15126\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/Sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite15126/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21298\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost21298-xDeploymentTestGroup1913\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost21298-xDeploymentTestGroup1913\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite15126\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite15126\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite15126\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite15126\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21298\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost21298\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost21298\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21298\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost21298\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost21298\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/components/xDeploymentTestSite15126\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"validatedResources\":[{\"apiVersion\":\"2015-02-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"name\":\"xDeploymentTestHost21298\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"properties\":{\"name\":\"xDeploymentTestHost21298\",\"sku\":\"Standard\",\"workerSize\":\"0\",\"numberOfWorkers\":1}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\"],\"apiVersion\":\"2015-02-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"name\":\"xDeploymentTestSite15126\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":{\"hidden-related:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\":\"Resource\"},\"properties\":{\"name\":\"xDeploymentTestSite15126\",\"serverFarmId\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\"}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/Sites/xDeploymentTestSite15126\"],\"apiVersion\":\"2015-02-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126/Extensions/MSDeploy\",\"name\":\"xDeploymentTestSite15126/MSDeploy\",\"type\":\"Microsoft.Web/sites/Extensions\",\"properties\":{\"packageUri\":\"https://auxmktplceprod.blob.core.windows.net/packages/StarterSite-modified.zip\",\"dbType\":\"None\",\"connectionString\":\"\",\"setParameters\":{\"Application Path\":\"xDeploymentTestSite15126\"}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost21298-xDeploymentTestGroup1913\",\"name\":\"xDeploymentTestHost21298-xDeploymentTestGroup1913\",\"type\":\"microsoft.insights/autoscalesettings\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\":\"Resource\"},\"properties\":{\"profiles\":[{\"name\":\"Default\",\"capacity\":{\"minimum\":\"1\",\"maximum\":\"2\",\"default\":\"1\"},\"rules\":[{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT10M\",\"timeAggregation\":\"Average\",\"operator\":\"GreaterThan\",\"threshold\":80},\"scaleAction\":{\"direction\":\"Increase\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT10M\"}},{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT1H\",\"timeAggregation\":\"Average\",\"operator\":\"LessThan\",\"threshold\":60},\"scaleAction\":{\"direction\":\"Decrease\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT1H\"}}]}],\"enabled\":false,\"name\":\"xDeploymentTestHost21298-xDeploymentTestGroup1913\",\"targetResourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\"}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite15126\",\"name\":\"ServerErrors xDeploymentTestSite15126\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\":\"Resource\"},\"properties\":{\"name\":\"ServerErrors xDeploymentTestSite15126\",\"description\":\"xDeploymentTestSite15126 has some server errors, status code 5xx.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"metricName\":\"Http5xx\"},\"operator\":\"GreaterThan\",\"threshold\":0,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite15126\",\"name\":\"ForbiddenRequests xDeploymentTestSite15126\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\":\"Resource\"},\"properties\":{\"name\":\"ForbiddenRequests xDeploymentTestSite15126\",\"description\":\"xDeploymentTestSite15126 has some requests that are forbidden, status code 403.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"metricName\":\"Http403\"},\"operator\":\"GreaterThan\",\"threshold\":0,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost21298\",\"name\":\"CPUHigh xDeploymentTestHost21298\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\":\"Resource\"},\"properties\":{\"name\":\"CPUHigh xDeploymentTestHost21298\",\"description\":\"The average CPU is high across all the instances of xDeploymentTestHost21298\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"metricName\":\"CpuPercentage\"},\"operator\":\"GreaterThan\",\"threshold\":90,\"windowSize\":\"PT15M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost21298\",\"name\":\"LongHttpQueue xDeploymentTestHost21298\",\"type\":\"microsoft.insights/alertrules\",\"location\":\"East US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\":\"Resource\"},\"properties\":{\"name\":\"LongHttpQueue xDeploymentTestHost21298\",\"description\":\"The HTTP queue for the instances of xDeploymentTestHost21298 has a large number of pending requests.\",\"isEnabled\":false,\"condition\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ThresholdRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleMetricDataSource\",\"resourceUri\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"metricName\":\"HttpQueueLength\"},\"operator\":\"GreaterThan\",\"threshold\":100,\"windowSize\":\"PT5M\"},\"action\":{\"odata.type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.RuleEmailAction\",\"sendToServiceOwners\":true,\"customEmails\":[]}}},{\"dependsOn\":[\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\"],\"apiVersion\":\"2014-04-01\",\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/components/xDeploymentTestSite15126\",\"name\":\"xDeploymentTestSite15126\",\"type\":\"microsoft.insights/components\",\"location\":\"Central US\",\"tags\":{\"hidden-link:/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\":\"Resource\"},\"properties\":{\"applicationId\":\"xDeploymentTestSite15126\"}}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '2b179ba3-d007-4579-901b-15ca63b85ee6',
  'x-ms-correlation-request-id': '2b179ba3-d007-4579-901b-15ca63b85ee6',
  'x-ms-routing-request-id': 'WESTUS:20160325T191513Z:2b179ba3-d007-4579-901b-15ca63b85ee6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:15:12 GMT',
  'content-length': '15741' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1913/providers/Microsoft.Resources/deployments/Deploy11629?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Resources/deployments/Deploy11629\",\"name\":\"Deploy11629\",\"properties\":{\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite15126\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost21298\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Standard\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-03-25T19:15:14.5875061Z\",\"duration\":\"PT0.6217412S\",\"correlationId\":\"2de090ad-4978-43a2-9dd2-47ef767e07fa\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21298\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite15126\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/Sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite15126/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21298\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost21298-xDeploymentTestGroup1913\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost21298-xDeploymentTestGroup1913\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite15126\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite15126\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite15126\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite15126\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21298\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost21298\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost21298\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/serverfarms/xDeploymentTestHost21298\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost21298\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost21298\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost21298\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/Microsoft.Web/sites/xDeploymentTestSite15126\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite15126\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup1913/providers/microsoft.insights/components/xDeploymentTestSite15126\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite15126\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1913/providers/Microsoft.Resources/deployments/Deploy11629/operationStatuses/08587426735715119932?api-version=2016-02-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '2de090ad-4978-43a2-9dd2-47ef767e07fa',
  'x-ms-correlation-request-id': '2de090ad-4978-43a2-9dd2-47ef767e07fa',
  'x-ms-routing-request-id': 'WESTUS:20160325T191514Z:2de090ad-4978-43a2-9dd2-47ef767e07fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:15:14 GMT',
  'content-length': '5361' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1913/providers/Microsoft.Resources/deployments/Deploy11629/cancel?api-version=2016-02-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': '60e88c6f-7ccc-47a8-a8bd-be127ae054ed',
  'x-ms-correlation-request-id': '60e88c6f-7ccc-47a8-a8bd-be127ae054ed',
  'x-ms-routing-request-id': 'WESTUS:20160325T191515Z:60e88c6f-7ccc-47a8-a8bd-be127ae054ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:15:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup1913?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE5MTMtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'fc838308-74cc-4af6-8d9b-48783c27fa8f',
  'x-ms-correlation-request-id': 'fc838308-74cc-4af6-8d9b-48783c27fa8f',
  'x-ms-routing-request-id': 'WESTUS:20160325T191515Z:fc838308-74cc-4af6-8d9b-48783c27fa8f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:15:14 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE5MTMtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE5MTMtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '32107d52-6c61-4131-a099-895c1cd1fa59',
  'x-ms-correlation-request-id': '32107d52-6c61-4131-a099-895c1cd1fa59',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160325T191546Z:32107d52-6c61-4131-a099-895c1cd1fa59',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:15:45 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDE5MTMtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '21408e80-5b74-421d-8d03-e145262c4b1e',
  'x-ms-correlation-request-id': '21408e80-5b74-421d-8d03-e145262c4b1e',
  'x-ms-routing-request-id': 'WESTUS:20160325T191616Z:21408e80-5b74-421d-8d03-e145262c4b1e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 19:16:15 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestSite15126','xDeploymentTestHost21298','xDeploymentTestGroup1913','Deploy11629'];};