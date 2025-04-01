/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV1Contact } from "./ServiceDefinitionV1Contact";
import { ServiceDefinitionV1Info } from "./ServiceDefinitionV1Info";
import { ServiceDefinitionV1Integrations } from "./ServiceDefinitionV1Integrations";
import { ServiceDefinitionV1Org } from "./ServiceDefinitionV1Org";
import { ServiceDefinitionV1Resource } from "./ServiceDefinitionV1Resource";
import { ServiceDefinitionV1Version } from "./ServiceDefinitionV1Version";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Deprecated - Service definition V1 for providing additional service metadata and integrations.
*/
export class ServiceDefinitionV1 {
  /**
   * Contact information about the service.
  */
  "contact"?: ServiceDefinitionV1Contact;
  /**
   * Extensions to V1 schema.
  */
  "extensions"?: { [key: string]: any; };
  /**
   * A list of external links related to the services.
  */
  "externalResources"?: Array<ServiceDefinitionV1Resource>;
  /**
   * Basic information about a service.
  */
  "info": ServiceDefinitionV1Info;
  /**
   * Third party integrations that Datadog supports.
  */
  "integrations"?: ServiceDefinitionV1Integrations;
  /**
   * Org related information about the service.
  */
  "org"?: ServiceDefinitionV1Org;
  /**
   * Schema version being used.
  */
  "schemaVersion": ServiceDefinitionV1Version;
  /**
   * A set of custom tags.
  */
  "tags"?: Array<string>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "contact": {
      "baseName": "contact",
      "type": "ServiceDefinitionV1Contact",
    },
    "extensions": {
      "baseName": "extensions",
      "type": "{ [key: string]: any; }",
    },
    "externalResources": {
      "baseName": "external-resources",
      "type": "Array<ServiceDefinitionV1Resource>",
    },
    "info": {
      "baseName": "info",
      "type": "ServiceDefinitionV1Info",
      "required": true,
    },
    "integrations": {
      "baseName": "integrations",
      "type": "ServiceDefinitionV1Integrations",
    },
    "org": {
      "baseName": "org",
      "type": "ServiceDefinitionV1Org",
    },
    "schemaVersion": {
      "baseName": "schema-version",
      "type": "ServiceDefinitionV1Version",
      "required": true,
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ServiceDefinitionV1.attributeTypeMap;

  }

  public constructor() {











  }
}









