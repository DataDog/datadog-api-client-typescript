/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsOffsetMetaPage } from "./ExperimentsOffsetMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination information for a list response.
 */
export class ExperimentsOffsetMeta {
  /**
   * Result counts and offsets for a page of results.
   */
  "page"?: ExperimentsOffsetMetaPage;

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
    page: {
      baseName: "page",
      type: "ExperimentsOffsetMetaPage",
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
    return ExperimentsOffsetMeta.attributeTypeMap;
  }

  public constructor() {}
}
