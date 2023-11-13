## Install taxonomy-editor

npm install sb-taxonomy-editor@latest

## Store Environment and Framework configuration in localstorage.

    environment = {
            frameworkName: string,
            channelId: string,
            authToken: string,
            isApprovalRequired: false
    };

## Color configuration

    taxonomyConfig = {
        frameworkId: string,
        config: [
            {
                index:number,
                category:string,
                icon: 'string',
                color: 'string'
            }
        ]
    } 

## Adding lib tag into template

<sb-taxonomy-editor></sb-taxonomy-editor>

