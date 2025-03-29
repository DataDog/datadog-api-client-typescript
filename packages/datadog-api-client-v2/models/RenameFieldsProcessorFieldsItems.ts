/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `RenameFieldsProcessorFieldsItems` object.
 */
export class RenameFieldsProcessorFieldsItems {
  /**
   * The `items` `destination`.
   */
  "destination": string;
  /**
   * The `items` `preserve_source`.
   */
  "preserveSource": boolean;
  /**
   * The `items` `source`.
   */
  "source": string;

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
    destination: {
      baseName: "destination",
      type: "string",
      required: true,
    },
    preserveSource: {
      baseName: "preserve_source",
      type: "boolean",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RenameFieldsProcessorFieldsItems.attributeTypeMap;
  }

  public constructor() {}
}
