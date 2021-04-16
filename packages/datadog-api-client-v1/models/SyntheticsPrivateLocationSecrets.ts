/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsPrivateLocationSecretsAuthentication } from './SyntheticsPrivateLocationSecretsAuthentication';
import { SyntheticsPrivateLocationSecretsConfigDecryption } from './SyntheticsPrivateLocationSecretsConfigDecryption';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Secrets for the private location. Only present in the response when creating the private location.
*/

export class SyntheticsPrivateLocationSecrets {
    'authentication'?: SyntheticsPrivateLocationSecretsAuthentication;
    'configDecryption'?: SyntheticsPrivateLocationSecretsConfigDecryption;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "authentication": {
            "baseName": "authentication",
            "type": "SyntheticsPrivateLocationSecretsAuthentication",
            "format": ""
        },
        "configDecryption": {
            "baseName": "config_decryption",
            "type": "SyntheticsPrivateLocationSecretsConfigDecryption",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsPrivateLocationSecrets.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsPrivateLocationSecrets {
      let res = new SyntheticsPrivateLocationSecrets();

      res.authentication = ObjectSerializer.deserialize(data.authentication, "SyntheticsPrivateLocationSecretsAuthentication", "")

      res.configDecryption = ObjectSerializer.deserialize(data.config_decryption, "SyntheticsPrivateLocationSecretsConfigDecryption", "")


      return res;
    }

    static serialize(data: SyntheticsPrivateLocationSecrets): {[key: string]: any} {
        let attributeTypes = SyntheticsPrivateLocationSecrets.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.authentication = ObjectSerializer.serialize(data.authentication, "SyntheticsPrivateLocationSecretsAuthentication", "")

        res.config_decryption = ObjectSerializer.serialize(data.configDecryption, "SyntheticsPrivateLocationSecretsConfigDecryption", "")

        return res
    }
    
    public constructor() {
    }
}



