/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMPermanentRetentionFilterID } from "./RUMPermanentRetentionFilterID";
import { RUMPermanentRetentionFilterType } from "./RUMPermanentRetentionFilterType";
import { RUMPermanentRetentionFilterUpdateAttributes } from "./RUMPermanentRetentionFilterUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new permanent RUM retention filter configuration to update.
 */
export class RUMPermanentRetentionFilterUpdateData {
  /**
   * The configuration to update on a permanent RUM retention filter.
   */
  "attributes": RUMPermanentRetentionFilterUpdateAttributes;
  /**
   * The identifier of a permanent RUM retention filter.
   */
  "id": RUMPermanentRetentionFilterID;
  /**
   * The type of the resource. The value should always be `permanent_retention_filters`.
   */
  "type": RUMPermanentRetentionFilterType;

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
      type: "RUMPermanentRetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "RUMPermanentRetentionFilterID",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMPermanentRetentionFilterType",
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
    return RUMPermanentRetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
