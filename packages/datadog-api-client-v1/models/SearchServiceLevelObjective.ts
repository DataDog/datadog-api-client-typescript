/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SearchServiceLevelObjectiveData } from "./SearchServiceLevelObjectiveData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A service level objective data container.
 */
export class SearchServiceLevelObjective {
  /**
   * A service level objective ID and attributes.
   */
  "data"?: SearchServiceLevelObjectiveData;

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
      type: "SearchServiceLevelObjectiveData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SearchServiceLevelObjective.attributeTypeMap;
  }

  public constructor() {}
}
