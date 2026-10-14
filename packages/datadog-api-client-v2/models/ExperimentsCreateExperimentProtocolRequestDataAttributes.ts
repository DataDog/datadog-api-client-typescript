/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create a draft protocol with the organization default subject type.
 */
export class ExperimentsCreateExperimentProtocolRequestDataAttributes {
  /**
   * Optional text that explains the protocol.
   */
  "description"?: string;
  /**
   * Metadata for imported resources. Must encode to at most 4096 bytes. Null clears it; omission preserves it on update.
   */
  "migrationMetadata"?: { [key: string]: any };
  /**
   * Protocol name. Leading and trailing spaces are removed. The trimmed name must contain 1 to 255 characters.
   */
  "name": string;

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
    description: {
      baseName: "description",
      type: "string",
    },
    migrationMetadata: {
      baseName: "migration_metadata",
      type: "{ [key: string]: any; }",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return ExperimentsCreateExperimentProtocolRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
