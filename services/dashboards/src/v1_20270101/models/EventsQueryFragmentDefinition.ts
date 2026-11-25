import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsQueryFragmentDefinitionDataSource } from "./EventsQueryFragmentDefinitionDataSource";
import { EventsQueryFragmentDefinitionSearch } from "./EventsQueryFragmentDefinitionSearch";
import { StorageType } from "./StorageType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsQueryFragmentDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": EventsQueryFragmentDefinitionDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search"?: EventsQueryFragmentDefinitionSearch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "storage"?: StorageType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    dataSource: {
      baseName: "data_source",
      type: "EventsQueryFragmentDefinitionDataSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "EventsQueryFragmentDefinitionSearch",
    },
    storage: {
      baseName: "storage",
      type: "StorageType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsQueryFragmentDefinition.attributeTypeMap;
  }

  public constructor() {}
}
