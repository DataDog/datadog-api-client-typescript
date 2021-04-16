/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object describing the SSL certificate used for the test.
*/

export class SyntheticsSSLCertificateSubject {
    /**
    * Country Name associated with the certificate.
    */
    'C'?: string;
    /**
    * Common Name that associated with the certificate.
    */
    'CN'?: string;
    /**
    * Locality associated with the certificate.
    */
    'L'?: string;
    /**
    * Organization associated with the certificate.
    */
    'O'?: string;
    /**
    * Organizational Unit associated with the certificate.
    */
    'OU'?: string;
    /**
    * State Or Province Name associated with the certificate.
    */
    'ST'?: string;
    /**
    * Subject Alternative Name associated with the certificate.
    */
    'altName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "C": {
            "baseName": "C",
            "type": "string",
            "format": ""
        },
        "CN": {
            "baseName": "CN",
            "type": "string",
            "format": ""
        },
        "L": {
            "baseName": "L",
            "type": "string",
            "format": ""
        },
        "O": {
            "baseName": "O",
            "type": "string",
            "format": ""
        },
        "OU": {
            "baseName": "OU",
            "type": "string",
            "format": ""
        },
        "ST": {
            "baseName": "ST",
            "type": "string",
            "format": ""
        },
        "altName": {
            "baseName": "altName",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsSSLCertificateSubject.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsSSLCertificateSubject {
      let res = new SyntheticsSSLCertificateSubject();

      res.C = ObjectSerializer.deserialize(data.C, "string", "")

      res.CN = ObjectSerializer.deserialize(data.CN, "string", "")

      res.L = ObjectSerializer.deserialize(data.L, "string", "")

      res.O = ObjectSerializer.deserialize(data.O, "string", "")

      res.OU = ObjectSerializer.deserialize(data.OU, "string", "")

      res.ST = ObjectSerializer.deserialize(data.ST, "string", "")

      res.altName = ObjectSerializer.deserialize(data.altName, "string", "")


      return res;
    }

    static serialize(data: SyntheticsSSLCertificateSubject): {[key: string]: any} {
        let attributeTypes = SyntheticsSSLCertificateSubject.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.C = ObjectSerializer.serialize(data.C, "string", "")

        res.CN = ObjectSerializer.serialize(data.CN, "string", "")

        res.L = ObjectSerializer.serialize(data.L, "string", "")

        res.O = ObjectSerializer.serialize(data.O, "string", "")

        res.OU = ObjectSerializer.serialize(data.OU, "string", "")

        res.ST = ObjectSerializer.serialize(data.ST, "string", "")

        res.altName = ObjectSerializer.serialize(data.altName, "string", "")

        return res
    }
    
    public constructor() {
    }
}



