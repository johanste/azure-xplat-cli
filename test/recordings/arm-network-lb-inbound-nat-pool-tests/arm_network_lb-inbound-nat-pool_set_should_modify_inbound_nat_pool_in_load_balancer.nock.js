// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"fdc59e73-d457-463d-b3ca-c3b55f11d620\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a431a3cb-3cf6-4431-bb76-844c2bd19856\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"fdc59e73-d457-463d-b3ca-c3b55f11d620\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"test-inbound-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\",\r\n        \"etag\": \"W/\\\"fdc59e73-d457-463d-b3ca-c3b55f11d620\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 50000,\r\n          \"frontendPortRangeEnd\": 55000,\r\n          \"backendPort\": 80,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fdc59e73-d457-463d-b3ca-c3b55f11d620"',
  'x-ms-request-id': 'b583bfc4-26f8-4e83-b41a-d546f33912d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'a1a2ba50-2617-4576-a849-ab60eeb61714',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122536Z:a1a2ba50-2617-4576-a849-ab60eeb61714',
  date: 'Fri, 25 Mar 2016 12:25:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"fdc59e73-d457-463d-b3ca-c3b55f11d620\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a431a3cb-3cf6-4431-bb76-844c2bd19856\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"fdc59e73-d457-463d-b3ca-c3b55f11d620\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"test-inbound-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\",\r\n        \"etag\": \"W/\\\"fdc59e73-d457-463d-b3ca-c3b55f11d620\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 50000,\r\n          \"frontendPortRangeEnd\": 55000,\r\n          \"backendPort\": 80,\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fdc59e73-d457-463d-b3ca-c3b55f11d620"',
  'x-ms-request-id': 'b583bfc4-26f8-4e83-b41a-d546f33912d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'a1a2ba50-2617-4576-a849-ab60eeb61714',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122536Z:a1a2ba50-2617-4576-a849-ab60eeb61714',
  date: 'Fri, 25 Mar 2016 12:25:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"bdb7faec-3363-4f5a-91be-b5436ad25161\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a431a3cb-3cf6-4431-bb76-844c2bd19856\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"bdb7faec-3363-4f5a-91be-b5436ad25161\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"test-inbound-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\",\r\n        \"etag\": \"W/\\\"bdb7faec-3363-4f5a-91be-b5436ad25161\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 50001,\r\n          \"frontendPortRangeEnd\": 55001,\r\n          \"backendPort\": 81,\r\n          \"protocol\": \"Udp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a86f0437-a514-4c41-aad2-5adbfb74f7b6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/a86f0437-a514-4c41-aad2-5adbfb74f7b6?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'eb981ccb-eb4a-4e95-bfeb-d478f7702723',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122537Z:eb981ccb-eb4a-4e95-bfeb-d478f7702723',
  date: 'Fri, 25 Mar 2016 12:25:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"bdb7faec-3363-4f5a-91be-b5436ad25161\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a431a3cb-3cf6-4431-bb76-844c2bd19856\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"bdb7faec-3363-4f5a-91be-b5436ad25161\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"test-inbound-pool\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/inboundNatPools/test-inbound-pool\",\r\n        \"etag\": \"W/\\\"bdb7faec-3363-4f5a-91be-b5436ad25161\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 50001,\r\n          \"frontendPortRangeEnd\": 55001,\r\n          \"backendPort\": 81,\r\n          \"protocol\": \"Udp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-inbound-nat-pools/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a86f0437-a514-4c41-aad2-5adbfb74f7b6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/a86f0437-a514-4c41-aad2-5adbfb74f7b6?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'eb981ccb-eb4a-4e95-bfeb-d478f7702723',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T122537Z:eb981ccb-eb4a-4e95-bfeb-d478f7702723',
  date: 'Fri, 25 Mar 2016 12:25:37 GMT',
  connection: 'close' });
 return result; }]];