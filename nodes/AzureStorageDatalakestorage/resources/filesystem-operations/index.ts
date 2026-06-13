import type { INodeProperties } from 'n8n-workflow';

export const filesystemOperationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Filesystem Operations"
					]
				}
			},
			"options": [
				{
					"name": "Filesystem Get Properties",
					"value": "Filesystem Get Properties",
					"action": "Get Filesystem Properties.",
					"description": "All system and user-defined filesystem properties are specified in the response headers.",
					"routing": {
						"request": {
							"method": "HEAD",
							"url": "=/{{$parameter[\"filesystem\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "HEAD /{filesystem}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filesystem Operations"
					],
					"operation": [
						"Filesystem Get Properties"
					]
				}
			}
		},
];
