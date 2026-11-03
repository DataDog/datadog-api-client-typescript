/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems } from "./ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the experiment traffic summary.
 */
export class ExperimentsTrafficSummaryV2DTODataAttributes {
  /**
   * Whether the observed variant traffic is imbalanced.
   */
  "isTrafficImbalanced"?: boolean;
  /**
   * Total number of subjects included in the traffic summary.
   */
  "totalSubjects"?: number;
  /**
   * Exposure counts for each experiment variant.
   */
  "variants"?: Array<ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems>;

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
    isTrafficImbalanced: {
      baseName: "is_traffic_imbalanced",
      type: "boolean",
    },
    totalSubjects: {
      baseName: "total_subjects",
      type: "number",
      format: "int64",
    },
    variants: {
      baseName: "variants",
      type: "Array<ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems>",
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
    return ExperimentsTrafficSummaryV2DTODataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
