/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataTransformProperties } from "./DataTransformProperties";
import { DataTransformType } from "./DataTransformType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A data transformer, which is custom JavaScript code that executes and transforms data when its inputs change.
 */
export class DataTransform {
  /**
   * The ID of the data transformer.
   */
  "id": string;
  /**
   * A unique identifier for this data transformer. This name is also used to access the transformer's result throughout the app.
   */
  "name": string;
  /**
   * The properties of the data transformer.
   */
  "properties": DataTransformProperties;
  /**
   * The data transform type.
   */
  "type": DataTransformType;

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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    properties: {
      baseName: "properties",
      type: "DataTransformProperties",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DataTransformType",
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
    return DataTransform.attributeTypeMap;
  }

  public constructor() {}
}
