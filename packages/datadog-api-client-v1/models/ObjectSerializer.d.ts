export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    /**
     * Convert data to a string according the given media type
     */
    static stringify(data: any, mediaType: string): string;
    /**
     * Parse data from a string according to the given media type
     */
    static parse(rawData: string, mediaType: string | undefined): any;
}
