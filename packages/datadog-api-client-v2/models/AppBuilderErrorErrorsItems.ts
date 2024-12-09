/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppBuilderErrorErrorsItemsSource } from "./AppBuilderErrorErrorsItemsSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `AppBuilderErrorErrorsItems` object.
 */
export class AppBuilderErrorErrorsItems {
  /**
   * The `items` `detail`.
   */
  "detail"?: string;
  /**
   * The definition of `AppBuilderErrorErrorsItemsSource` object.
   */
  "source"?: AppBuilderErrorErrorsItemsSource;

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
    detail: {
      baseName: "detail",
      type: "string",
    },
    source: {
      baseName: "source",
      type: "AppBuilderErrorErrorsItemsSource",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AppBuilderErrorErrorsItems.attributeTypeMap;
  }

  public constructor() {}
}
