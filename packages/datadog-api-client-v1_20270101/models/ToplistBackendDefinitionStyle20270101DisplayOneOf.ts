/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend } from "./ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend";
import { ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemType } from "./ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ToplistBackendDefinitionStyle20270101DisplayOneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "legend"?: ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    legend: {
      baseName: "legend",
      type: "ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend",
    },
    type: {
      baseName: "type",
      type: "ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistBackendDefinitionStyle20270101DisplayOneOf.attributeTypeMap;
  }

  public constructor() {}
}
