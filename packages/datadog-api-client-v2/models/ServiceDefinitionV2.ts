/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Contact } from "./ServiceDefinitionV2Contact";
import { ServiceDefinitionV2Doc } from "./ServiceDefinitionV2Doc";
import { ServiceDefinitionV2Integrations } from "./ServiceDefinitionV2Integrations";
import { ServiceDefinitionV2Link } from "./ServiceDefinitionV2Link";
import { ServiceDefinitionV2Repo } from "./ServiceDefinitionV2Repo";
import { ServiceDefinitionV2Version } from "./ServiceDefinitionV2Version";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Service definition V2 for providing service metadata and integrations.
*/
export class ServiceDefinitionV2 {
  /**
   * A list of contacts related to the services.
  */
  "contacts"?: Array<ServiceDefinitionV2Contact>;
  /**
   * Unique identifier of the service. Must be unique across all services and is used to match with a service in Datadog.
  */
  "ddService": string;
  /**
   * Experimental feature. A Team handle that matches a Team in the Datadog Teams product.
  */
  "ddTeam"?: string;
  /**
   * A list of documentation related to the services.
  */
  "docs"?: Array<ServiceDefinitionV2Doc>;
  /**
   * Extensions to V2 schema.
  */
  "extensions"?: { [key: string]: any; };
  /**
   * Third party integrations that Datadog supports.
  */
  "integrations"?: ServiceDefinitionV2Integrations;
  /**
   * A list of links related to the services.
  */
  "links"?: Array<ServiceDefinitionV2Link>;
  /**
   * A list of code repositories related to the services.
  */
  "repos"?: Array<ServiceDefinitionV2Repo>;
  /**
   * Schema version being used.
  */
  "schemaVersion": ServiceDefinitionV2Version;
  /**
   * A set of custom tags.
  */
  "tags"?: Array<string>;
  /**
   * Team that owns the service.
  */
  "team"?: string;

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
    "contacts": {
      "baseName": "contacts",
      "type": "Array<ServiceDefinitionV2Contact>",
    },
    "ddService": {
      "baseName": "dd-service",
      "type": "string",
      "required": true,
    },
    "ddTeam": {
      "baseName": "dd-team",
      "type": "string",
    },
    "docs": {
      "baseName": "docs",
      "type": "Array<ServiceDefinitionV2Doc>",
    },
    "extensions": {
      "baseName": "extensions",
      "type": "{ [key: string]: any; }",
    },
    "integrations": {
      "baseName": "integrations",
      "type": "ServiceDefinitionV2Integrations",
    },
    "links": {
      "baseName": "links",
      "type": "Array<ServiceDefinitionV2Link>",
    },
    "repos": {
      "baseName": "repos",
      "type": "Array<ServiceDefinitionV2Repo>",
    },
    "schemaVersion": {
      "baseName": "schema-version",
      "type": "ServiceDefinitionV2Version",
      "required": true,
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "team": {
      "baseName": "team",
      "type": "string",
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




    return ServiceDefinitionV2.attributeTypeMap;

  }

  public constructor() {











  }
}









