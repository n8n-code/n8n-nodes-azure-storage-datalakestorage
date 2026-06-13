import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { filesystemOperationsDescription } from './resources/filesystem-operations';

export class AzureStorageDatalakestorage implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Storage Datalakestorage',
                name: 'N8nDevAzureStorageDatalakestorage',
                icon: { light: 'file:./azure-storage-datalakestorage.png', dark: 'file:./azure-storage-datalakestorage.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Data Lake Storage offers scalable storage for Hadoop and big data workloads.',
                defaults: { name: 'Azure Storage Datalakestorage' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureStorageDatalakestorageApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Filesystem Operations",
					"value": "Filesystem Operations",
					"description": ""
				}
			],
			"default": ""
		},
		...filesystemOperationsDescription
                ],
        };
}
