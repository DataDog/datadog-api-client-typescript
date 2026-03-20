/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A variant of a feature flag.
 */
export class Variant {
  /**
   * The timestamp when the variant was created.
   */
  "createdAt"?: Date;
  /**
   * The unique identifier of the variant.
   */
  "id": string;
  /**
   * The unique key of the variant.
   */
  "key": string;
  /**
   * The name of the variant.
   */
  "name": string;
  /**
   * The timestamp when the variant was last updated.
   */
  "updatedAt"?: Date;
  /**
   * The value of the variant as a string.
   */
  "value": string;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    value: {
      baseName: "value",
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
    return Variant.attributeTypeMap;
  }

  public constructor() {}
}
