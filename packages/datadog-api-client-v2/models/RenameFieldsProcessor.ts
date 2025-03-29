/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RenameFieldsProcessorFieldsItems } from "./RenameFieldsProcessorFieldsItems";
import { RenameFieldsProcessorType } from "./RenameFieldsProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `rename_fields` processor changes field names.
 */
export class RenameFieldsProcessor {
  /**
   * The `RenameFieldsProcessor` `fields`.
   */
  "fields": Array<RenameFieldsProcessorFieldsItems>;
  /**
   * The `RenameFieldsProcessor` `id`.
   */
  "id": string;
  /**
   * The `RenameFieldsProcessor` `inputs`.
   */
  "inputs": Array<string>;
  /**
   * The definition of `RenameFieldsProcessorType` object.
   */
  "type": RenameFieldsProcessorType;

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
    fields: {
      baseName: "fields",
      type: "Array<RenameFieldsProcessorFieldsItems>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RenameFieldsProcessorType",
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
    return RenameFieldsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
