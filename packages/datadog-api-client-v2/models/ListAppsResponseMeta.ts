/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListAppsResponseMetaPage } from "./ListAppsResponseMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Pagination metadata.
 */
export class ListAppsResponseMeta {
  /**
   * Information on the total number of apps, to be used for pagination.
   */
  "page"?: ListAppsResponseMetaPage;

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
      type: "ListAppsResponseMetaPage",
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
    return ListAppsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
