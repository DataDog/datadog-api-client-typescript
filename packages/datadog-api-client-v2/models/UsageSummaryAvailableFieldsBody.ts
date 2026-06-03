/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSummaryAvailableFieldsAttributes } from "./UsageSummaryAvailableFieldsAttributes";
import { UsageSummaryAvailableFieldsType } from "./UsageSummaryAvailableFieldsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Available-fields data.
 */
export class UsageSummaryAvailableFieldsBody {
  /**
   * The lists of field names returned by `GET /api/v1/usage/summary` at each
   * of its three response levels. Each list contains every key the data endpoint
   * emits—both typed fields declared in the OpenAPI spec and untyped keys
   * exposed through `additionalProperties`.
   */
  "attributes"?: UsageSummaryAvailableFieldsAttributes;
  /**
   * The identifier for the discovery scope. Always `"all"`.
   */
  "id"?: string;
  /**
   * Type of available-fields data.
   */
  "type"?: UsageSummaryAvailableFieldsType;

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
      type: "UsageSummaryAvailableFieldsAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageSummaryAvailableFieldsType",
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
    return UsageSummaryAvailableFieldsBody.attributeTypeMap;
  }

  public constructor() {}
}
