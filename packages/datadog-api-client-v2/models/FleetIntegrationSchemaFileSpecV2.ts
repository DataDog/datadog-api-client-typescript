/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetIntegrationSchemaSpecOptionV2 } from "./FleetIntegrationSchemaSpecOptionV2";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A configuration file specification for an integration.
 */
export class FleetIntegrationSchemaFileSpecV2 {
  /**
   * The name of the example configuration file.
   */
  "exampleName": string;
  /**
   * The name of the configuration file.
   */
  "name": string;
  /**
   * The configuration options declared in the file.
   */
  "options": Array<FleetIntegrationSchemaSpecOptionV2>;

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
    exampleName: {
      baseName: "example_name",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    options: {
      baseName: "options",
      type: "Array<FleetIntegrationSchemaSpecOptionV2>",
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
    return FleetIntegrationSchemaFileSpecV2.attributeTypeMap;
  }

  public constructor() {}
}
