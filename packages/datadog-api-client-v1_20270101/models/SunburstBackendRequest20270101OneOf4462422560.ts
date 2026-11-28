/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { ScalarFormulaSort } from "./ScalarFormulaSort";
import { SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452228032 } from "./SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452228032";
import { SunburstRequestStyle } from "./SunburstRequestStyle";
import { WidgetFormula } from "./WidgetFormula";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstBackendRequest20270101OneOf4462422560 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452228032;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ScalarFormulaSort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: SunburstRequestStyle;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    formulas: {
      baseName: "formulas",
      type: "Array<WidgetFormula>",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452228032",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ScalarFormulaSort",
    },
    style: {
      baseName: "style",
      type: "SunburstRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstBackendRequest20270101OneOf4462422560.attributeTypeMap;
  }

  public constructor() {}
}
