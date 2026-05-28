/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagDescriptionUpsertRequestData } from "./CostTagDescriptionUpsertRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for creating or updating a Cloud Cost Management tag key description.
 */
export class CostTagDescriptionUpsertRequest {
  /**
   * Resource envelope carrying the tag key description being upserted. The `id` is informational; the authoritative tag key is taken from the URL path.
   */
  "data": CostTagDescriptionUpsertRequestData;

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
    data: {
      baseName: "data",
      type: "CostTagDescriptionUpsertRequestData",
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
    return CostTagDescriptionUpsertRequest.attributeTypeMap;
  }

  public constructor() {}
}
