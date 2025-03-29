/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RemoveFieldsProcessorType } from "./RemoveFieldsProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `remove_fields` processor deletes specified fields from logs.
 */
export class RemoveFieldsProcessor {
  /**
   * The `RemoveFieldsProcessor` `fields`.
   */
  "fields": Array<string>;
  /**
   * The `RemoveFieldsProcessor` `id`.
   */
  "id": string;
  /**
   * The `RemoveFieldsProcessor` `inputs`.
   */
  "inputs": Array<string>;
  /**
   * The definition of `RemoveFieldsProcessorType` object.
   */
  "type": RemoveFieldsProcessorType;

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
      type: "Array<string>",
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
      type: "RemoveFieldsProcessorType",
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
    return RemoveFieldsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
