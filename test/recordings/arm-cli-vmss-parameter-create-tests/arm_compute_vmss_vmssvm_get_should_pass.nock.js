// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-c7bc46c73f474b618ff2e71a06f96803\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage19497.blob.core.windows.net/xplatteststoragecnt11727/test-os-0-c7bc46c73f474b618ff2e71a06f96803.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test000000\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test\",\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test1\",\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': 'cc1bf5ee-d813-44ea-b6eb-c4cc2d6914cd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '65033da9-5b00-4d89-8b20-223d89c416ae',
  'x-ms-routing-request-id': 'WESTUS:20160415T195149Z:65033da9-5b00-4d89-8b20-223d89c416ae',
  date: 'Fri, 15 Apr 2016 19:51:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-c7bc46c73f474b618ff2e71a06f96803\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage19497.blob.core.windows.net/xplatteststoragecnt11727/test-os-0-c7bc46c73f474b618ff2e71a06f96803.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test000000\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test\",\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test1\",\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': 'cc1bf5ee-d813-44ea-b6eb-c4cc2d6914cd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '65033da9-5b00-4d89-8b20-223d89c416ae',
  'x-ms-routing-request-id': 'WESTUS:20160415T195149Z:65033da9-5b00-4d89-8b20-223d89c416ae',
  date: 'Fri, 15 Apr 2016 19:51:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2016-03-30')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-49543a553c224caa867ad40c502a8591\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage29681.blob.core.windows.net/xplatteststoragecnt26329/test-os-1-49543a553c224caa867ad40c502a8591.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test000001\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test\",\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test1\",\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': 'b33f0390-d59f-47e7-ba08-a3801ae5fcc3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '849201c4-948e-4ec5-96cf-26f4a428db85',
  'x-ms-routing-request-id': 'WESTUS:20160415T195151Z:849201c4-948e-4ec5-96cf-26f4a428db85',
  date: 'Fri, 15 Apr 2016 19:51:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2016-03-30')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-49543a553c224caa867ad40c502a8591\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage29681.blob.core.windows.net/xplatteststoragecnt26329/test-os-1-49543a553c224caa867ad40c502a8591.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test000001\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test\",\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test1\",\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate8758/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131051507044651086',
  'x-ms-request-id': 'b33f0390-d59f-47e7-ba08-a3801ae5fcc3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '849201c4-948e-4ec5-96cf-26f4a428db85',
  'x-ms-routing-request-id': 'WESTUS:20160415T195151Z:849201c4-948e-4ec5-96cf-26f4a428db85',
  date: 'Fri, 15 Apr 2016 19:51:50 GMT',
  connection: 'close' });
 return result; }]];