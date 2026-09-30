/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetIntegrationSchemaDetailV2Attributes } from "./FleetIntegrationSchemaDetailV2Attributes";
import { FleetIntegrationSchemaV2ResourceType } from "./FleetIntegrationSchemaV2ResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The detailed configuration schema for a single integration.
 */
export class FleetIntegrationSchemaDetailV2 {
  /**
   * Attributes for a single integration's configuration schema.
   */
  "attributes": FleetIntegrationSchemaDetailV2Attributes;
  /**
   * The integration name used to look up the schema, echoed back from the request.
   */
  "id": string;
  /**
   * The type of the integration schema resource.
   */
  "type": FleetIntegrationSchemaV2ResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "FleetIntegrationSchemaDetailV2Attributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FleetIntegrationSchemaV2ResourceType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FleetIntegrationSchemaDetailV2.attributeTypeMap;
  }

  public constructor() {}
}
