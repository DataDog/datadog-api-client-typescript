/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMPermanentRetentionFilterAttributes } from "./RUMPermanentRetentionFilterAttributes";
import { RUMPermanentRetentionFilterID } from "./RUMPermanentRetentionFilterID";
import { RUMPermanentRetentionFilterType } from "./RUMPermanentRetentionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A permanent RUM retention filter.
 */
export class RUMPermanentRetentionFilterData {
  /**
   * The attributes of a permanent RUM retention filter.
   */
  "attributes"?: RUMPermanentRetentionFilterAttributes;
  /**
   * The identifier of a permanent RUM retention filter.
   */
  "id"?: RUMPermanentRetentionFilterID;
  /**
   * The type of the resource. The value should always be `permanent_retention_filters`.
   */
  "type"?: RUMPermanentRetentionFilterType;

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
      type: "RUMPermanentRetentionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "RUMPermanentRetentionFilterID",
    },
    type: {
      baseName: "type",
      type: "RUMPermanentRetentionFilterType",
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
    return RUMPermanentRetentionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
