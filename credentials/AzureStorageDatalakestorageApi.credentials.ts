import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureStorageDatalakestorageApi implements ICredentialType {
        name = 'N8nDevAzureStorageDatalakestorageApi';

        displayName = 'Azure Storage Datalakestorage API';

        icon: Icon = { light: 'file:../nodes/AzureStorageDatalakestorage/azure-storage-datalakestorage.png', dark: 'file:../nodes/AzureStorageDatalakestorage/azure-storage-datalakestorage.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Storage Datalakestorage API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
