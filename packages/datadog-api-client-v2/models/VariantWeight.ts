/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Variant } from "./Variant";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Variant weight details.
 */
export class VariantWeight {
  /**
   * The timestamp when the variant weight was created.
   */
  "createdAt"?: Date;
  /**
   * Unique identifier of the variant weight assignment.
   */
  "id"?: string;
  /**
   * The timestamp when the variant weight was last updated.
   */
  "updatedAt"?: Date;
  /**
   * The percentage weight for the variant.
   */
  "value": number;
  /**
   * A variant of a feature flag.
   */
  "variant"?: Variant;
  /**
   * The variant ID.
   */
  "variantId": string;

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
      format: "uuid",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
    },
    variant: {
      baseName: "variant",
      type: "Variant",
    },
    variantId: {
      baseName: "variant_id",
      type: "string",
      required: true,
      format: "uuid",
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
    return VariantWeight.attributeTypeMap;
  }

  public constructor() {}
}
