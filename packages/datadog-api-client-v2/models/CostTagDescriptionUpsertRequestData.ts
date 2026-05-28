/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagDescriptionType } from "./CostTagDescriptionType";
import { CostTagDescriptionUpsertRequestDataAttributes } from "./CostTagDescriptionUpsertRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Resource envelope carrying the tag key description being upserted. The `id` is informational; the authoritative tag key is taken from the URL path.
 */
export class CostTagDescriptionUpsertRequestData {
  /**
   * Mutable attributes set when creating or updating a Cloud Cost Management tag key description.
   */
  "attributes": CostTagDescriptionUpsertRequestDataAttributes;
  /**
   * Identifier of the tag key the description applies to. Matches the `tag_key` path parameter.
   */
  "id"?: string;
  /**
   * Type of the Cloud Cost Management tag description resource.
   */
  "type": CostTagDescriptionType;

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
      type: "CostTagDescriptionUpsertRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CostTagDescriptionType",
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
    return CostTagDescriptionUpsertRequestData.attributeTypeMap;
  }

  public constructor() {}
}
